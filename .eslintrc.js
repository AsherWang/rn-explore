module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'globals': {
        '$t': 'readonly',
        'i18n': 'readonly',
        'gScreen': 'readonly',
    },
    'rules': {
        'react/prefer-stateless-function': [0],
        'global-require': [0],
        'no-console': [0],
    }
};