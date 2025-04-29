import Button from "../Button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const ContactUs = () => {
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (!email) {
      setError("Please enter an email address");
      return;
    }
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setError(null);
  };
  return (
    <section className="mt-20 md:mt-48 bg-soft-blue py-14">
      <div className="container max-w-xl text-center flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8 items-center text-white">
          <p className="font-semibold tracking-widest text-sm sm:text-base">
            35,000+ ALREADY JOINED
          </p>
          <h2 className="text-2xl font-medium md:text-3xl">
            Stay up-to-date with what we're doing
          </h2>
        </div>
        <form
          className={`flex items-center ${
            error ? "gap-y-12" : ""
          } gap-4 flex-col md:flex-row`}
          onSubmit={handleSubmit}
        >
          <div className="relative isolate w-full md:w-auto md:grow">
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className={`w-full z-10 border-2 transition-all  py-3 bg-white rounded-lg px-4 outline-none ${
                error ? "border-soft-red" : "border-transparent"
              }`}
            />
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="size-6 flex items-center justify-center rounded-full bg-soft-red text-white absolute top-1/2 -translate-y-1/2 right-3"
                >
                  !
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-white -z-10 absolute w-[99%] left-1/2 -translate-x-1/2 bg-soft-red -bottom-6 py-1 px-3 rounded-b-lg text-sm text-start"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <Button
            type="submit"
            variant="danger"
            className="w-full py-3 md:w-auto"
          >
            Contact Us
          </Button>
        </form>
      </div>
    </section>
  );
};
