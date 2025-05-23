import TestimonialCarousel, {
  Testimonial,
} from "../shared/TestimonialCarousel";

const testimonials: Testimonial[] = [
  {
    name: "John Carter",
    position: "Lead Developer, TechNova Inc.",
    text: "TechNova has transformed the way we approach development. Their tools are reliable, and the support is top-notch!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    companyLogo:
      "https://cdn.freelogovectors.net/wp-content/uploads/2024/03/webflow-logo-freelogovectors.net_.png",
  },
  {
    name: "Emily Stone",
    position: "UX Designer, Bright Ideas Studio",
    text: "Working with Bright Ideas has been a game changer. Our UX is now more intuitive and engaging than ever before.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
  },
  {
    name: "Carlos Mendes",
    position: "Product Manager, VerdeSoft",
    text: "VerdeSoft delivers exactly what we need—scalable solutions, fast response times, and great user experience.",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
  },
];

function Review() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-start pl-8">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
}

export default Review;
