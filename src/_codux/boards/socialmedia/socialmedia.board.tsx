import { createBoard } from '@wixc3/react-board';
import Socialmedia from '../../../components/socialmedia/socialmedia';

// Define the social media links
const socialMediaLinks = [
  { platform: 'facebook', url: 'https://www.facebook.com/example' },
  { platform: 'twitter', url: 'https://www.twitter.com/example' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/example' },
  // Add more social media links if needed
];

export default createBoard({
  name: 'Socialmedia',
  Board: () => <Socialmedia links={socialMediaLinks} />,
});
