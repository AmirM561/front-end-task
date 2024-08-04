import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.scss'; // Custom styles if needed

export const metadata = {
  title: 'Join Our Community',
  description: 'Join our community with a 30-day money back guarantee.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
