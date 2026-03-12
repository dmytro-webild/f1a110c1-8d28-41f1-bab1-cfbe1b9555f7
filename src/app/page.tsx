"use client"

import { ChefHat, Flame, Heart, Leaf, Sparkles, Star, Users } from "lucide-react";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="largeSmall"
      background="none"
      cardStyle="solid"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "features" },
            { name: "Dishes", id: "product" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Rachel's"
          bottomLeftText="Authentic Korean Cuisine"
          bottomRightText="reservations@rachels.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Welcome to Rachel's Korean Restaurant"
          description="Experience authentic Korean cuisine crafted with traditional recipes and the finest ingredients. From sizzling BBQ to comforting stews, every dish tells a story of Korean culinary excellence."
          tag="Authentic Korean Dining"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-bottle_23-2149048133.jpg", imageAlt: "Korean restaurant ambiance" },
            { imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-dish-inside-plate-tray-green-table-food-meal-restaurant_140725-27860.jpg", imageAlt: "Korean banchan side dishes" },
            { imageSrc: "http://img.b2bpic.net/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_1150-43003.jpg", imageAlt: "Bibimbap bowl" },
            { imageSrc: "http://img.b2bpic.net/free-photo/thai-tom-yum-soup_1150-18489.jpg", imageAlt: "Kimchi jjigae stew" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-dough-with-ray-sun-her-hands_158595-5646.jpg", imageAlt: "Korean chef cooking" },
            { imageSrc: "http://img.b2bpic.net/free-photo/chef-cutting-raw-beef-steak-from-middle-kitchen_141793-162.jpg", imageAlt: "Korean BBQ grilling" },
            { imageSrc: "http://img.b2bpic.net/free-photo/tasty-fresh-cold-appetizing-vanilla-ice-cream-with-nuts-apricots-waffles-syrup-white-table-with-ingredients-making-dessert-closeup_1220-1400.jpg", imageAlt: "Tteokbokki rice cakes" },
            { imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-holding-bottle_23-2149048133.jpg", imageAlt: "Restaurant dining experience" }
          ]}
          carouselPosition="right"
          buttons={[
            { text: "Reserve a Table", href: "contact" },
            { text: "View Menu", href: "features" }
          ]}
          buttonAnimation="blur-reveal"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="Our Story"
          tagIcon={Heart}
          tagAnimation="slide-up"
          title="Bringing Korea to Your Table – Honoring Tradition, Celebrating Flavor"
          useInvertedBackground={true}
          buttons={[
            { text: "Explore Our Story", href: "#features" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyFive
          title="Our Menu Highlights"
          description="Discover the signature flavors that make Rachel's your destination for authentic Korean cuisine"
          tag="What We Offer"
          tagIcon={ChefHat}
          tagAnimation="blur-reveal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Korean Banchan",              description: "Complimentary side dishes featuring kimchi, seasoned vegetables, and traditional pickles that accompany every meal",              icon: Leaf,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-dish-inside-plate-tray-green-table-food-meal-restaurant_140725-27860.jpg", imageAlt: "Colorful Korean banchan side dishes" },
                { imageSrc: "http://img.b2bpic.net/free-photo/top-view-cooked-dish-inside-plate-tray-green-table-food-meal-restaurant_140725-27860.jpg", imageAlt: "Traditional kimchi and sides" }
              ]
            },
            {
              title: "BBQ & Grilled Specialties",              description: "Experience tabletop Korean BBQ with premium marinated meats, bulgogi, and kalbi cooked to perfection right at your table",              icon: Flame,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/chef-cutting-raw-beef-steak-from-middle-kitchen_141793-162.jpg", imageAlt: "Korean BBQ grilling at table" },
                { imageSrc: "http://img.b2bpic.net/free-photo/chef-cutting-raw-beef-steak-from-middle-kitchen_141793-162.jpg", imageAlt: "Sizzling meat on grill" }
              ]
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Signature Dishes"
          description="Try our most beloved Korean specialties, prepared fresh daily with authentic recipes"
          tag="Must-Try"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="depth-3d"
          useInvertedBackground={true}
          gridVariant="three-columns-all-equal-width"
          products={[
            { id: "1", name: "Bibimbap", price: "$14.95", imageSrc: "http://img.b2bpic.net/free-photo/korean-instant-noodle-tteokbokki-korean-spicy-sauce-ancient-food_1150-43003.jpg", imageAlt: "Bibimbap Korean rice bowl", initialQuantity: 1 },
            { id: "2", name: "Kimchi Jjigae", price: "$13.95", imageSrc: "http://img.b2bpic.net/free-photo/thai-tom-yum-soup_1150-18489.jpg", imageAlt: "Kimchi jjigae stew", initialQuantity: 1 },
            { id: "3", name: "Tteokbokki", price: "$12.95", imageSrc: "http://img.b2bpic.net/free-photo/tasty-fresh-cold-appetizing-vanilla-ice-cream-with-nuts-apricots-waffles-syrup-white-table-with-ingredients-making-dessert-closeup_1220-1400.jpg", imageAlt: "Spicy tteokbokki rice cakes", initialQuantity: 1 }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardSixteen
          title="What Our Guests Say"
          description="Hear from our satisfied customers who have experienced the authentic taste of Korea at Rachel's"
          tag="Customer Reviews"
          tagIcon={Users}
          tagAnimation="slide-up"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            { id: "1", name: "Sarah Mitchell", role: "Food Critic", company: "Culinary Guide", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman_23-2147615403.jpg" },
            { id: "2", name: "David Park", role: "Restaurant Owner", company: "Dining Experience Co.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-ok-sign_23-2148990150.jpg" },
            { id: "3", name: "Jennifer Lee", role: "Travel Blogger", company: "Wanderlust Eats", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-blue-shirt_23-2148095792.jpg" },
            { id: "4", name: "Michael Chang", role: "Regular Customer", company: "Local Food Community", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/middle-age-latin-businesswoman-smiling-happy-standing-with-arms-crossed-gesture-city_839833-17431.jpg" },
            { id: "5", name: "Emily Rodriguez", role: "Event Planner", company: "Celebrations Inc.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/jouyful-smiling-young-latino-guy-blank-grey-longsleeve-folds-hands-his-chest_346278-1042.jpg" },
            { id: "6", name: "James Wilson", role: "Business Executive", company: "Corporate Dining", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/closeup-portrait-successful-happy-smiling-young-woman-beige-jacket-glasses-standing-lobby-office-reception-greeting-business-client-with-pleasant-grin-inviting-company_197531-30568.jpg" }
          ]}
          kpiItems={[
            { value: "15+", label: "Years of Excellence" },
            { value: "10K+", label: "Happy Customers" },
            { value: "50+", label: "Signature Dishes" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable Korean dining experience. Book your reservation today or get in touch with any questions."
          useInvertedBackground={true}
          mediaAnimation="blur-reveal"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-woman-holding-bottle_23-2149048133.jpg"
          imageAlt="Rachel's Korean Restaurant interior"
          buttonText="Reserve Now"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Special requests or dietary preferences", rows: 4, required: false }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Restaurant",              items: [
                { label: "About Us", href: "#about" },
                { label: "Menu", href: "#features" },
                { label: "Reservations", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "Phone: (555) 123-4567", href: "tel:5551234567" },
                { label: "Email: info@rachels.com", href: "mailto:info@rachels.com" },
                { label: "Hours: Mon-Sun 11AM-10PM", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "TikTok", href: "https://tiktok.com" }
              ]
            }
          ]}
          copyrightText="© 2025 Rachel's Korean Restaurant. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}