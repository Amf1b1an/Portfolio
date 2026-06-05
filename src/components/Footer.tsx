export const Footer = () => (
  <footer className="w-full bg-[#713A00] border-t border-[#FF7700] py-10 mt-16">
    <div className="max-w-4xl mx-auto px-4">
      <ul className="flex flex-col gap-3 text-sm text-[#FF7700]">
        <h3 className="text-base font-bold text-[#FFCE63] tracking-wide uppercase mb-1">
          Contact Info
        </h3>
        <li className="flex items-center gap-2">
          <span className="font-medium text-[#FFF399] w-12">Email:</span>
          <a
            href="mailto:fabiansandberg00@gmail.com"
            className="text-[#FFCE63] hover:text-blue-600 hover:underline transition-colors"
          >
            fabiansandberg00@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span className="font-medium text-[#FFF399] w-12">GitHub:</span>
          <a
            href="https://github.com/Amf1b1an"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-semibold transition-colors"
          >
            github.com/Amf1b1an
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
