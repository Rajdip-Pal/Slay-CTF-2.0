function Rules() {
    return (
      <div className="relative bg-transparent border border-white/20 rounded-xl p-6 max-w-3xl mx-auto mt-10">
        {/* Circular Image in Top-Left */}
        <div className="absolute -top-8 -left-8 w-24 h-24 rounded-full bg-white/10 border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.8)] overflow-hidden">
          <img
            src="/images/rules-image_optimized.png"
            alt="Rules"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
  
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6 text-center drop-shadow-[0_0_10px_rgba(236,72,153,0.9)]">
          Rules
        </h2>
  
        {/* Rules Text with pointers */}
        <div className="text-white text-sm md:text-base leading-relaxed space-y-3 pl-4">
          <p className="flex items-start gap-2 p-4">
            <span className="text-pink-400">▶</span>
            Participants are allowed to use any tool (online/offline) for solving the challenges.
          </p>
          <p className="flex items-start gap-2 p-4">
            <span className="text-pink-400">▶</span>
            Flag sharing is strictly prohibited. It will cause a ban from the CTF for both players.
          </p>
          <p className="flex items-start gap-2 p-4">
            <span className="text-pink-400">▶</span>
            The duration of the CTF is 2.5 hours.
          </p>
          <p className="flex items-start gap-2 p-4">
            <span className="text-pink-400">▶</span>
            Any type of attack on the CTF website is strictly prohibited.
          </p>
        </div>
      </div>
    );
  }
  
  export default Rules;
  