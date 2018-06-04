import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDkeUJeeaRmaoQyyt87dCL6gNR3dubIqkY',
    authDomain: 'backyarde-3f8ef.firebaseapp.com',
    databaseURL: 'https://backyarde-3f8ef.firebaseio.com',
    projectId: 'backyarde-3f8ef',
    storageBucket: 'backyarde-3f8ef.appspot.com',
    messagingSenderId: '165224649305'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Backyarde',
    defaultProfileCover:
      'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#9b29a2',
    secondaryColor: '#3e134d'
  }
}
