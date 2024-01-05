import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import tailwindConfig from './tailwind.config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    plugins: [tailwind(tailwindConfig), autoprefixer],
};
