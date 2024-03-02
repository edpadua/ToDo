import tw from "tailwind-styled-components";

export const Form = tw.form`
lg:w-1/2
`;

export const Input = tw.input`
w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline
`;

export const TextAerea = tw.textarea`
w-full px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline
`;

export const Button = tw.button`
hover:bg-teal-300 bg-teal-400 text-white font-bold py-2 px-4 mb-2 rounded 
`;

export const ButtonRemove = tw.button`
hover:bg-red-500 bg-red-600 text-white font-bold h-10 py-2 px-4  rounded 
`;

export const ButtonCheck = tw.button`
hover:bg-green-500 bg-green-600 text-white font-bold h-10 py-2 px-4  rounded 
`;

export const Error = tw.p`
z-10 pt-1 text-red-500 text-xs italic
`;

export const Lista = tw.div`
bg-slate-200 rounded-lg my-4 py-4
`;


export const ListaItem = tw.div`
flex
`;


export const ListaTitulo = tw.h2`
  p-4  float-left
`;


export const PageTitle = tw.h1`
    font-bold pb-6
`;

