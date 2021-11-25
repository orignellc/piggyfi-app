import Head from "next/head";
import { ModalFundWallet } from "../Wallet";

export const LayoutGuest = ({
  page,
  title,
  description,
  children,
  metaImage,
}) => {
  return (
    <>
      <Head>
        <title>{`${title ?? "Welcome"} - Piggyfi App`}</title>
        <meta
          name="description"
          content={description ? description : "Piggyfi App"}
        />
        <meta
          property="og:title"
          content={`${title ?? "Welcome"} - Piggyfi App`}
        />
        <meta
          property="og:description"
          content={description ? description : "Piggyfi App"}
        />
        {/*<meta*/}
        {/*  property="og:image"*/}
        {/*  content={*/}
        {/*    metaImage*/}
        {/*  }*/}
        {/*/>*/}
        {/*<meta*/}
        {/*  property="og:url"*/}
        {/*  content={"https://academy.qlipit.io/" + page ?? ""}*/}
        {/*/>*/}
        {/*<meta property="og:type" content="website" />*/}
        {/*<link rel="icon" href="/images/favicon/favicon.ico" />*/}
        <link
          rel="android-chrome-icon"
          sizes="180x180"
          href="/images/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="h-screen flex justify-center sm:items-center">
        <div className="max-w-xl bg-gray-dark w-full relative">
          <div className="px-8 py-8 bg-opacity-70 relative">{children}</div>
          <ModalFundWallet />
        </div>
      </div>
    </>
  );
};
