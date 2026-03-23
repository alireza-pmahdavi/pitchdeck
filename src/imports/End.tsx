function Frame() {
  return (
    <div className="content-center flex flex-wrap font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium gap-[40px] h-[25px] items-center justify-center relative shrink-0 text-[17px] text-white w-[910px]">
      <a className="block css-g0mm18 leading-[0] relative shrink-0" href="https://linkedin.com/company/caasify">
        <p className="css-ew64yg cursor-pointer decoration-solid leading-[normal] underline">Linkedin</p>
      </a>
      <p className="css-ew64yg leading-[normal] relative shrink-0">Email: info@caasify.com</p>
      <p className="css-ew64yg leading-[normal] relative shrink-0">Phone: + (370) 696 02760</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[29px] items-center left-0 top-[508.5px]">
      <p className="css-ew64yg font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[40px] text-white">www.Caasify.com</p>
      <div className="h-0 relative shrink-0 w-[1024px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1024 1">
            <line id="Line 71" stroke="var(--stroke-0, white)" x2="1024" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame />
    </div>
  );
}

export default function End() {
  return (
    <div className="bg-[#0a2e5c] relative size-full" data-name="end">
      <Frame1 />
      <p className="absolute css-4hzbpn font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold h-[76px] leading-[30px] left-[calc(50%-306px)] text-[138px] text-white top-[304px] w-[611px]">CAASIFY</p>
      <p className="absolute css-ew64yg font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[normal] left-[368.5px] opacity-80 text-[28px] text-center text-white top-[380px] tracking-[1.68px] translate-x-[-50%]">Cloud As A Service</p>
    </div>
  );
}