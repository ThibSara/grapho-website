import Link from "next/link";

const HeroSection = () => {

  return (
    <main className="flex-col flex items-center min-h-screen justify-center px-4 md:px-8">
        <div className=" max-w-3xl mx-auto place-self-center space-y-5 text-center">
        <div href="/" className="text-4xl md:text-4xl text-secondary font-semibold">
            Une écriture {" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            lente{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            peu lisible{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            fatigante{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            irrégulière{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            les lignes ne sont pas respectées{" "}
            <span className="dot mx-1 inline-block h-2 w-2 rounded-full bg-secondary" /> {" "}
            ne suit pas le rythme de la pensée{" "}
          </div>
        </div>
</main>
  );
};

export default HeroSection;
