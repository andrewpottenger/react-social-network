import IIcon from './IIcon'

export default class Icon implements IIcon {
	public static readonly CSS_CLASS = 'Icon-Div'
	private static srcIdMap: Map<string, string>
	private static svgDefLibrary: HTMLDivElement
	private static stylingElement: HTMLStyleElement

	public readonly className: string
    public readonly svg: string
    
	private static assertIconDefLibrary() {
		if (Icon.svgDefLibrary) { return }

		Icon.srcIdMap = new Map<string, string>()
		Icon.svgDefLibrary = document.createElement('div')
		Icon.svgDefLibrary.id = 'IconDefLibrary'
		document.body.appendChild(Icon.svgDefLibrary)
		Icon.stylingElement = document.createElement('style')
		Icon.stylingElement.innerHTML = `
			#IconDefLibrary {
				visibility: hidden;
				position: fixed;
				pointer-events: none;
				z-index: -10000;
			}

			.${Icon.CSS_CLASS} {
				display: inline-block;
				position: relative;
				min-height: 16px;
				min-width: 16px;
				fill: #F04;
				stroke: #F40;
				box-sizing: border-box;
			}

			.${Icon.CSS_CLASS} > svg {
				box-sizing: border-box;
				height: 100%;
				width: 100%;
				padding: inherit;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		`
		document.head.appendChild(Icon.stylingElement)
	}

	private static assertSvgDef(svgSrc: string) {
		Icon.assertIconDefLibrary()
		let id = Icon.srcIdMap.get(svgSrc)
		if (id === undefined) {
			id = 'svg_' + svgSrc.replace(/(\..+$)|[\/\.]/g, '')
			Icon.srcIdMap.set(svgSrc, id)

			const r = new XMLHttpRequest()
			r.open('GET', svgSrc, true)
			r.onreadystatechange = () => {
				if (r.readyState !== 4 || r.status !== 200) { return }
				Icon.svgDefLibrary.innerHTML += r.responseText.replace('<svg', `<svg id='${id}'`)
			}
			r.send()
		}
    }

    constructor(rawForm: IIcon) {
		this.className = rawForm.className
		this.svg = rawForm.svg
	}

	public get element() {
		Icon.assertSvgDef(this.svg)
		const id = Icon.srcIdMap.get(this.svg)
		const out = document.createElement('div')
		out.className = Icon.CSS_CLASS
		out.innerHTML = `<svg viewBox="0 0 1 1"><use href="#${id}" height="1" width="1"/></svg>`
		return out
	}
}
