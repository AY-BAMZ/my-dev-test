import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontWeight: {
                bold: '700',
                semibold: '600',
                medium: '500',
                regular: '400',
                light: '300',
                thin: '200',
                'extra-thin': '100',
            },
            colors: {
                primary: '#3556AB',
                secondary: '#CDE53D',
                danger: '#AB3535',
                success: '#53DA69',
                border: '#CBCBCB',
                'primary-text': '#071D55',
                'danger-border': '#720D0D',
                'secondary-border': '#9EB031',
                black: {
                    default: '#000000',
                    1000: '#111111',
                    900: '#1D2939',
                    800: '#334155',
                    700: '#465871',
                    600: '#667085',
                    500: '#8D8D8D',
                    400: '#94A3B8',
                    300: '#E4E7EC',
                    200: '#F2F4F7',
                    100: '#F5F7F7',
                },
            },
        },
    },
    plugins: [],
};
export default config;
