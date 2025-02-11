import Reac, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import image1 from './../images/img1.jpg';
import image2 from './../images/img2.jpg'; // Example: Import other images
import image3 from './../images/img3.jpg';
import image4 from './../images/img4.jpg'
// ... import other images as needed

const images = [image1, image2, image3, image4]; // Array of images
const fullText = "A Jana Seva Kendra is a service center that provides various government and non-government facilities to the public. It helps people apply for essential documents such as Aadhaar cards, PAN cards, voter ID cards, and ration cards. Additionally, it offers xerox (photocopying), document printing, online form submission, bill payments, and money transfer services. The center simplifies various government processes, making them more accessible to citizens. Many people visit Jana Seva Kendras daily for assistance with official paperwork, ensuring they receive the required services quickly and efficiently.";
const odiaText = "ଜନସେବା କେନ୍ଦ୍ର ଏକ ସେବା କେନ୍ଦ୍ର ଯେଉଁଠି ଜନସାଧାରଣଙ୍କୁ ବିଭିନ୍ନ ସରକାରୀ ଏବଂ ବେସରକାରୀ ସୁବିଧା ଦିଆଯାଏ। ଏଠି ଲୋକମାନେ ଆଧାର କାର୍ଡ, ପ୍ୟାନ୍ କାର୍ଡ, ଭୋଟର ଚିହ୍ନା ପତ୍ର, ରାସନ୍ କାର୍ଡ ଯେପରି ଜରୁରୀ ଦଲିଲ ପାଇଁ ଆବେଦନ କରିପାରିବେ। ଏଥିପାଇଁ ଝେରକ୍ସ(ଫଟୋକପି), ଡକ୍ୟୁମେଣ୍ଟ ପ୍ରିଣ୍ଟିଂ, ଅନଲାଇନ୍ ଫର୍ମ ଜମା, ବିଲ୍ ପେମେଣ୍ଟ, ଏବଂ ଟଙ୍କା ପରିବହନ ସେବା ମଧ୍ୟ ଉପଲବ୍ଧ ଅଛି। ଏହି କେନ୍ଦ୍ର ନିଜେ ଏକ ବିଭିନ୍ନ ସରକାରୀ ପ୍ରକ୍ରିୟାକୁ ସହଜ ଏବଂ ସ୍ବାଭାବିକ କରିଥାଏ, ଯାହା ଲୋକଙ୍କ ପାଇଁ ଉପଯୋଗୀ ଅଟେ। ଦିନ ପ୍ରତିଦିନ ଅନେକ ଲୋକ ଜନସେବା କେନ୍ଦ୍ର ଦେଖା ଦେଖି ଜରୁରୀ ସେବା ପାଇଁ ସହଯୋଗ ନେଇଥାନ୍ତି।"
const h1tagOdia = "ଜନସେବା କେନ୍ଦ୍ରରେ କଣ କରାଯାଏ ? ";
const AboutUs = () => {
    const [englishText, setEnglishText] = useState("");
    const [odiaToText, setOdiaToText] = useState("");
    const [index, setIndex] = useState(0);
    const [indexOdia, setIndexOdia] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    let imagesToShow = images[currentImage];

    const imageDisplay = () => {

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }, []);
    }

    // Reusable function to handle text animation
    const animateText = (text, index, setIndex, setText) => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, 20);
            return () => clearTimeout(timeout);
        }
    };

    useEffect(() => {
        return animateText(fullText, index, setIndex, setEnglishText)
    }, [index]);

    useEffect(() => {
        return animateText(odiaText, indexOdia, setIndexOdia, setOdiaToText)
    }, [index]);
    return (
        <div className="overflow-hidden w-full bg-white-900 py-10 mt-5">
            <motion.div
                className="flex space-x-10"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-96 h-64 object-cover rounded-lg shadow-xl"
                    />
                ))}
            </motion.div>
            <div className="flex justify-center gap-4 mt-5">
                <div className="w-1/2 text-center">
                    <p className="bg-green-200 rounded-lg shadow-lg py-10 px-4">

                        {englishText}
                    </p>
                </div>
                <div className="w-1/2 text-center">
                    <p className="bg-green-200 rounded-lg shadow-lg py-10 px-4">
                        {odiaToText}
                    </p>
                </div>

            </div>

        </div >
    );
};

export default AboutUs;