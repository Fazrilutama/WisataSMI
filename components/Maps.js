import React from 'react'

export default function Maps() {
  return (
    <div className="container">
      <div className='px-5'>
        <p className="font-bold text-xl lg:text-3xl py-5 ">Maps</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.952613386238!2d106.91275585015168!3d-6.831922835206839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e684a7d24eb8f4f%3A0x1e5e0f34bcb62779!2sSitu%20Gn.!5e0!3m2!1sid!2sid!4v1685340493118!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className='w-full'
        ></iframe>
      </div>
    </div>
  );
}
