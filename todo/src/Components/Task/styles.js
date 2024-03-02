import tw from "tailwind-styled-components";

export const TaskContainer = tw.div`
rounded-md 
p-4
bg-slate-100
flex
justify-between
`;

export const TaskData = tw.div`
     
`;

export const TaskControl = tw.div`
    flex content-center gap-x-px items-center

    `;

export const TaskTitle = tw.h2`
font-bold text-lg mb-2 ${props => props.decoration}
`;

export const TaskDescription = tw.p`
text-sm mb-2
`;

