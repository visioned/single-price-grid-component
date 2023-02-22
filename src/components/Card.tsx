export const Card = () => {
  const why = [
    "Tutorials by industry experts",
    "Peer & expert code review",
    "Coding exercises",
    "Access to our GitHub repos",
    "Community forum",
    "Flashcard decks",
    "New videos every week",
  ];
  return (
    <div className="flex flex-col shadow-2xl lg:rounded-bl-[8px] lg:rounded-br-[8px] rounded-[8px]">
      <div className="lg:h-[216px] lg:w-[635px] lg:rounded-tl-[8px] lg:rounded-tr-[8px] h-[267px] w-[311px] bg-[#fff] py-[24px] px-[25px] lg:py-[40px] lg:px-[40px] rounded-t-[6px]">
        <h2 className="text-[#2ab2af] font-bold text-xl tracking-tight lg:text-2xl">
          Join our community
        </h2>
        <h3 className="text-[#c0df34] mt-[20px] font-bold text-[15px] tracking-tight leading-tight lg:text-lg">
          30-day, hassle-free money back guarantee
        </h3>
        <p className="text-gray-400 text-sm lg:text-[16px] mt-[16px] leading-[1.75] tracking-snug lg:mr-1 -mr-2 lg:mt-[8px]">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </div>

      <div className="lg:flex lg:flex-row">
        <div className="lg:h-[259px] lg:w-[317.5px] h-[228px] w-[311px] bg-[#2BB3B1] lg:py-[40px] py-[20px] lg:px-[40px] px-[25px] lg:rounded-bl-[8px] ">
          <h2 className="text-lg font-bold">Monthly Subscription</h2>
          <h3 className="mt-[8px] font-bold text-[32px]">
            $29 &nbsp;
            <span className="font-normal text-base opacity-50 align-middle pb-[4px]">
              per month
            </span>
          </h3>
          <p className="mt-[1px]">Full access for less than $1 a day</p>
          <button className="h-[48px] w-[263px] lg:w-[237px] font-bold bg-[#c0df34] text-[#fff] rounded-[4px] mt-[26px] shadow-lg">
            Sign Up
          </button>
        </div>

        <div className="lg:h-[259px] lg:w-[317.5px] h-[227px] w-[311px] bg-[#4ABEBD] py-[20px] px-[25px] lg:py-[40px] lg:px-[40px] lg:rounded-br-[8px] lg:rounded-bl-0 rounded-b-[6px] ">
          <h2 className="font-bold text-lg">Why Us</h2>
          <ul className="mt-4">
            {why.map((item) => (
              <li key={item} className="text-sm opacity-70">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
