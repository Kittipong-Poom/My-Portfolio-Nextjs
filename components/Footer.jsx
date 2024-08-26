import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-pink-400 py-12 mt-12">
    <div className="container mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* socials */}
        <Socials
          containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
          iconsStyles="text-pink-700 dark:text-white/70 text-[20px] hover:text-white
          dark:hover:text-pink-800 transition-all"
        />
        {/* copyright */}
        <div>
          Copyright &copy; Kittipong Wongsaditsayanon. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer

