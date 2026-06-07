export function Bio() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 text-center sm:text-left flex flex-col sm:flex-row items-center gap-8 border-b border-gray-200 dark:border-gray-800 mb-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
          Hi, I'm <span className="text-[#713A00]">Fabian</span>
        </h1>
        <h2 className="text-xl font-medium text-black dark:text-gray-400">
          FED Student, Noroff Online
        </h2>
        <p className="text-base text-black dark:text-gray-400 leading-relaxed">
          I am a second year student at Noroff FED Online. At Noroff i've
          learned the fundamentals surrounding HTML, CSS and JavaScript, as well
          as more advanced aspects of the fields. Some of my hobbies include
          cinematology, collecting vinyls and trading cards, and games, both
          boardgames and computer games. One of the things i enjoy the most, is
          combining everything i've learned about frontend developement with my
          hobbies, and construct projects that can be used and enjoyed by
          others, while actively improving my skills.
        </p>

        <div className="flex gap-4 justify-center sm:justify-start pt-2">
          <a
            href="https://github.com/Amf1b1an"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 transition"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
