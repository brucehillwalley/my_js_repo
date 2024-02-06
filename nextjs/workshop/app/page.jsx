import Feed from "@components/Feed";

const Home = () => {
  // throw new Error("This is a test error")
  return (
    <section className="w-full flex-center flex-col ">
      <h1 className="head_text text-center">Discover & Share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">AI-Powered Prompts</span>
      <p className="desc text-center">
        PromptHub is an open-source platform for discovering and sharing AI
        prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
