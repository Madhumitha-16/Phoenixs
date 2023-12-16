import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    // Add more testimonials as needed
  ];
  function getInitials(name) {
    return `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  }

  function generateBackground(name) {
    let hash = 0;
    let i;

    for (i = 0; i < name.length; i += 1) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }
  let name="Jane Smith"
  let initials = getInitials(name);
  let color = generateBackground(name);

  const customStyle = {
    display: "flex",
    height: "50px",
    width: "50px",
    borderRadius: "100px",
    color: "white",
    background: color,
    margin: "auto",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
   
  };

  const carouselContainerStyle = {
    textAlign: 'center',
  };

  const testimonialSlideStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <div style={carouselContainerStyle}>
        <h1 className="mb-4">Testimonial</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={testimonialSlideStyle}>
          <div className="avatar">
                  <div style={customStyle}>
                    <span>{initials}</span>
                  </div>
                </div>
            <h3 style={{ margin: '10px 0' }}>{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
