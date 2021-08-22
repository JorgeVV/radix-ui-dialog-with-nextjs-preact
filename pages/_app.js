import { IdProvider } from "@radix-ui/react-id";

export default function App({ Component, pageProps }) {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}
