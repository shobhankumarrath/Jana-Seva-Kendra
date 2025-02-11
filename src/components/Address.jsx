import React from 'react'

const Address = () => {
    return (
        <div className="w-1/2 h-96">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.77416144450453!2d85.80344415952098!3d20.27619817926534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7154329b447%3A0xe8fe6118b082cb67!2sSAI%20DIGITAL%20MICRO%20XEROX!5e1!3m2!1sen!2sin!4v1739280132500!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg border-0"
            ></iframe>
        </div>

    )
}

export default Address
