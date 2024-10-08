import SocialsFooter from "./SocialsFooter";

const Footer = () => {
  return (
    <footer className="background py-12 mt-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* socials */}
        <SocialsFooter
          
          containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
          iconsStyles="text-orange-500 dark:text-white/70 text-[20px] hover:text-white
          dark:hover:text-orange-500 transition-all"
        />
        {/* copyright */}
        <div className="text-white">
          Copyright &copy; Kittipong Wongsaditsayanon. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

