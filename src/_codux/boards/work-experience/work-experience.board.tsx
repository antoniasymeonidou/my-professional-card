// workExperienceBoard.tsx

import { createBoard } from '@wixc3/react-board';
import WorkExperience from '../../../components/work-experience/work-experience';

// Define work data
const workData = [
    {
        company: 'ABC Tech Solutions',
        position: 'Frontend Developer',
        duration: 'March 2019 - Present',
    },
    {
        company: 'XYZ Design Studio',
        position: 'UI/UX Designer',
        duration: 'January 2017 - February 2019',
    },
    // Add more work entries as needed
];

export default createBoard({
    name: 'WorkExperience', // The name of the board
    Board: (props) => <WorkExperience workData={workData} {...props} />,
    environmentProps: {
        canvasWidth: 373,
    }, // Pass the work data as a prop
});
