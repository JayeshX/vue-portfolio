<template>
    <section class="bg-blue-50 dark:bg-[#151515]" id="contact-me">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                <p data-aos="fade-up-right" class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-white">
                    Contact
                </p>
                <h2
                data-aos="fade-up-left" class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                    Get in Touch
                </h2>
                <p data-aos="fade-up-right" class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-[#cb1b28] "> I will get back to you as soon as I can
                </p>
            </div>
        </div>
        <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
                <div class="h-full pr-6">
                    <p data-aos="fade-up-left" class="mt-3 mb-12 text-lg text-gray-600 dark:text-white">
                        I am including my contact info you can directly contact me using this info
                        otherwise just use the field to contact me
                    </p>
                    <ul class="mb-6 md:mb-0">
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 dark:bg-[#cb1b28] text-gray-50">
                                <svg data-aos="fade-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                    <path
                                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                    </path>
                                </svg>
                            </div>
                            <div  class="ml-4 mb-4">
                                <h3 data-aos="fade-up-right" class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">My Address
                                </h3>
                                <p data-aos="fade-up-right" class="text-gray-600 dark:text-white">Juinagar, Navi Mumbai</p>
                                <p data-aos="fade-up-right" class="text-gray-600 dark:text-white">Maharashtra, India</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 dark:bg-[#cb1b28] text-gray-50">
                                <svg data-aos="fade-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path
                                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                    </path>
                                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 data-aos="fade-up-right" class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                </h3>
                                <p data-aos="fade-up-right" class="text-gray-600 dark:text-white">Mail: jayeshkirtane218@gmail.com</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 dark:bg-[#cb1b28] text-gray-50">
                                <svg data-aos="fade-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="h-6 w-6">
                                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                    <path d="M12 7v5l3 3"></path>
                                </svg>
                            </div>
                            <div class="ml-4 mb-4">
                                <h3 data-aos="fade-up-right" class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                    hours</h3>
                                <p data-aos="fade-up-right" class="text-gray-600 dark:text-white">Monday - Friday: 08:00 - 17:00</p>
                                <p data-aos="fade-up-right" class="text-gray-600 dark:text-white">Saturday &amp; Sunday: 08:00 - 12:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                    <h2 data-aos="fade-up-left" class="mb-4 text-2xl font-bold dark:text-[#cb1b28]">Let's Work Together!!</h2>
                    <form data-aos="fade-up-left" id="contactForm" ref="form" @submit.prevent="sendEmail">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label data-aos="fade-up-left" for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0" name="name">
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label data-aos="fade-up-left" for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Your email address" class="mb-2 w-full rounded-md border  border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email">
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label data-aos="fade-up-left" for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-black sm:mb-0"></textarea>
                            </div>
                        </div>
                        <div class="text-center">
                            <button data-aos="fade-up-left" type="submit" value="Send" class="w-full bg-blue-800 text-white px-6 py-3 font-xl dark:bg-[#cb1b28] rounded-md sm:mb-0">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      // Validate form fields
      if (!this.validateForm()) {
        // If validation fails, show error message
        alert('Please fill in all fields.');
        return;
      }

      emailjs
        .sendForm(
          'service_vfuoqhb',
          'template_sx6tp2o',
          this.$refs.form,
          '9cUicv7L_FfLwVuXP'
        )
        .then(
          (result) => {
            // If email is sent successfully, show success message
            alert('Message sent successfully!');
            // Reset the form
            this.resetForm();
            console.log('SUCCESS!', result.text);
          },
          (error) => {
            // If sending email fails, show error message
            alert('Failed to send message. Please try again later.');
            console.log('FAILED...', error.text);
          }
        );
    },
    validateForm() {
      // Validate each form field
      const name = this.$refs.form.name.value;
      const email = this.$refs.form.email.value;
      const message = this.$refs.form.textarea.value;

      return name && email && message;
    },
    resetForm() {
      // Reset the form fields
      this.$refs.form.reset();
    },
  },
};
</script>