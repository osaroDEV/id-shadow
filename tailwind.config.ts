import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		screens: {
			'xxl': '1440px',
		  },		
  		colors: {
  			neutral: {
  				'0': '#FFFFFF',
  				'50': '#F9FAFB',
  				'100': '#F5F7F8',
  				'200': '#EDEFF0',
  				'300': '#D3D5DA',
  				'400': '#98A2B3',
  				'500': '#66717F',
  				'700': '#273242',
  				'900': '#020617',
				'1000': '#030404'
  			},
  			pink: {
  				lighter: '#FDEBFF',
  				base: '#E255F2',
  			},
  			disabled: {
  				'300': '#D3D5DA'
  			},
  			blue: {
  				'10': '#E9EEFF',
				'30': '#99B1FF',
  				base: '#0C3DDE',
  				light: '#C1CFFF',
  				lighter: '#E9EEFF',
  				dark: '#00218C',
  				darker: '#07184F'
  			}
  		},
		  boxShadow: {
			'custom-combined': '0px_0px_0px_4px_#E9EEFF, 0px_1px_2px_0px_#1018280D',
			'custom': '0px 1px 2px 0px rgba(82, 88, 102, 0.06)',
		  },
  		borderRadius: {
  			base: '0.625rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
