System.register([], function (_export, _context) {
	'use strict';

	return {
		setters: [],
		execute: function () {
			_export('default', {
				package: '@aimpact/better-mind',
				version: '0.4.1-dev.11',
				languages: {
					default: 'en',
					supported: ['en', 'es', 'de']
				},
				environment: 'development',
				'global.css': true,
				params: {
					app: '@aimpact-partners/better-mind',
					APP_NAME: 'Ailearn',
					APP_LOGO: 'logo.png',
					baseUrl: 'https://ai.better-agile.com',
					apis: {
						ailearn: 'https://better-mind-api-1062406359948.europe-west10.run.app',
						agents: 'https://agents-api-883367315651.europe-west10.run.app'
					},
					firebase: {
						apiKey: 'AIzaSyBpF4toVpG-m_XQa3S1Z43hpe766H2JUUA',
						authDomain: 'better-mind-dev.firebaseapp.com',
						projectId: 'better-mind-dev',
						storageBucket: 'better-mind-dev.firebasestorage.app',
						messagingSenderId: '1062406359948',
						appId: '1:1062406359948:web:6423f65f5a0cb0358864a9',
						measurementId: 'G-KMQ7Z80SH9'
					}
				},
				ssr: {},
				backend: {}
			});
		}
	};
});
