import React from 'react'

const Tshirts = () => {
  return <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-4">
        {
          [1, 2, 3, 4, 5, 6].map((data, i) => <div key={i} className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-60 rounded overflow-hidden">
              <img alt="ecommerce" className="object-contain object-top m-auto h-[36vh] block" src="https://m.media-amazon.com/images/I/619SqQW1NYL._UL1200_.jpg" />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>)
        }


      </div>
    </div>
  </section>
}

export default Tshirts