import { createBoard } from '@wixc3/react-board';
import Cv from '../../../components/cv/cv';

const cvUrl = 'https://example.com/your-cv.pdf'; // Replace with your actual CV URL
const buttonText = 'Download CV'; // Replace with the desired button text

export default createBoard({
  name: 'Cv',
  Board: () => <Cv cvUrl={cvUrl} buttonText={buttonText} />,
});
