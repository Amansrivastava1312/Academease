import React from "react";
import { FaRocket } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Popular.css";
import Video from "./Video";

const Team = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="team-container"
      style={{ padding: "50px", backgroundColor: "#ebfaf5" }}
    >
      <h1 className="heading">
        <strong style={{ margin: "auto" }}>
          <FaRocket /> Popular PlayList
        </strong>
      </h1>
      <Slider {...settings} style={{ display: "flex", flexwrap: "wrap" }}>
        <div
          className="box-t"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>DSA</h1>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhAVFhUXFRUVFRUVEhUVFxAVFRUWFxUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAACAQIEAwUDBgwEBwEAAAAAAQIDEQQFITESQVEGE2FxkSKBoQcyUrHB0RQVI0JTVHKTsrPh8DRic5IkM2N0lKLSFv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDkL7RYz9dxH/kVP/oR5/i/1zEfv6n3mNADIfj3Ffrdf99U+8T8d4n9arfvqn3lAALrzjEfrNb97P7xrzOv+nq/vJ/eVAAsvH1f01T/AHy+8Y8XU/ST/wBz+8hFSAsU60ucpf7mQTk+r9QTEAET0FrFeKIUWavs8PDzin4p3aa+HxAbVpWk79RIpdBilbfXz2Gyd9QJYyjcnq0dLpprwe3n0Kq8h8KjWsW0AR87E9OnfVv01t5+JBN31EVRgSVJ9EMjprzLGHtq2rkE47+YEdVJ6pW6r7iInasiKaAaAAAAAABLhPnw/aj9aIiXC/Pj+1H60B7dAZxeIAeIAAAAAAAAAABUIKkAqQsYjkbd2RyGM7VKivd6IDXMNl8ptJJ67eJYzDJatJpSi9VdW1t5nT8bkMJwXD7O2sVrpsMp4GcoXnHilCzjKOl+F3d76q6umgORODEUDqea9k6dT2o0+FvW8bq9+q5M1bMuyFWmm4689Vr6oDV5QCEVs/UkxFKUHaUbP6xkUnvt1AHSs7Xv4j+7S216229SdUYx/PUl0taUfNEVru0dV9QC02nu2v75DKsLcxZJL/M+nJeYQa3er/8AWPn1AjhFNPryIrFqcUle+v1lapO/ICNoQWQgAAAAD6D9qPmvrGCxdtQPaPfoUx3fMAPHoAAAAAAAAAA6LGj0BJQWqOsZHTSpxsuhyrC/OTOr5DJOjGz6v4gbXhUnoZDC5XSck3FX/vkY3L5XsZ3DgWJ4OPQqVssjyWnT7jIqQl7gaxjuyOHrK0qa18DTc2+S2N70Kjh4NXR1unAjrU7gcDzjsBiaMeO8JJNJ8N1a/OzMLX7PYiF+KnJPTS266noatg3NcDV02vRO4uKwSa1in1ugPOEsrlyab5ra33lSpSa3TR2fP+y1ObuoJPyNDzjs5wKXCnp43A09irhtqnfzVgqqw2MbgPqRVtP76kJJUViMAAAAAAAPXHEBHcAPJYAAAAAAAAAA6LGgBYw2+h1HsqmqCcud7eKXM5fg43kvP7TqWbSdHDJU/nWUIeb0uBln2joYa0ak1xdFrbz6Fql8oWDTs6lvKMn9SsahlXZOjKKlWlJyerd929yXGdiMK0+Cu4vl7SfwYHR8q7WYatpGorrWz6dTPUq0JbM8/U8qq0J/k66nZ3Vmbt2VzusrQqJ9LgdTVivXrRitSnQm2rmvdo8VUSajHy8AL+bdqqOHWrvLe3M07EfKrC9lRfrb0NVzWnOrO05O7eyV3qZvIeylC16lKUpb+0n/AAgSVPlFjN/8mVvcTLGUsTCUoO/0ls1fqT1aOEi+7dJQ6RlHhv4q+5BgcopwqudPRSjaybs+a0A5fneF7urOPST9L6FOk7amd7b0eHFT8VF/BL7DAp6e8BKtS7IwAAAAAAAAPV/GIQd4uoAeWAAAAAAAAAAAA3rsv2doOFPvqFStUqrjSg+GNGm9It6q7e4GmYWVpJ9Gdjq0O8jDwV9rmi9sOyv4GlUg24SlazTvB2ukzpWWR9leSXwA0LP8dUjK1pNXtwq8eLwcuS8iXNauMw2HpVozUY1OK8MPCP5J2fApzd29d9uZvNXK1Ueq+BZoZLL6bXlb7gNSyPBzxWGlWq1ZKXeWpU68FKU4qMbvjhFON5cVna22jNkyvBqKj7Mk2tYy3j7+ZmcJlCjrq31bvYsU6CT13Ay2Ah7KuYvPMPq9ORncFT0RXxcFd3A59iMqp94pVFNU9P8AltKVR8+KTaaXgvU0zHdl8TOvOFGNN0ZSfDWduKEJT4rtt8XFHby05nZ55emrWuuhRnkVN8re77dwOcZ3lDhVjTw1SVWm94VPaUGucZPVG05Pg5xp2mtbGbhksYu6+oklh7Acb+UHCyli4xjFtyhFJLdu7Rgs57OYrDRU61Fxi9FK6aT6NrZnU6+FX40w0tL8FZa9Ulb6yfOsuaqyhVqSnRr/AJKpGWvd8WkJw+jZgcNAtZpgZUK1SjP51Obi/Gz39+/vKoAAAAAAAemPwpdGBifwh+HoAHn0AAAAAAAAAA9D5JRUGrLRUqSi/BQR54O8dhsz7/CUZ/nKHdS/ap6a+as/eBhvlbxsXQVPebkndLSKV931M12fq8cIvql8UjA9qsInhsVKpdTiouPEn9JaLzHfJ5juOilfWKSfu2A6JhMNfkZGGEXQp5fWVjITxKsBFipRgithsG78UnvqUsVOUpcXTY1Orm2ayxDilThSi9OKDamv2k7gdWwtMq46hd6GoVO2XduMKlOfG9LRi5Jv/K1uQZnnmYOLnQpQj0jUUpzfnGLSXqwNspXi+GXuLfco17I8ZiK1KMsRBQqc0tPfbkZuhXezAWtBGMxehexFYw+LxGjb2A0fNcU/xnhlF2ceNvya1+CNtzal3sYtK7vH4STuc7y+r32cW4klaSTetvYe3r8TomdYuGEw0qjelOLlr+dK2iXm7L3gcO7eYmNTMMTKO3eW98Uov4xZgR1So5Nybu222+rerGgAAAAAAB3Ti8RSDiADiIAAAAAAAAABtvyfdplhKrp1XajUau/0c9lPy5P3GpAB33tfK+BxP5ydGWvLbR/Uzm/yf5oqNRxk7KX1kOB7fV4YSWFnCNSLg6cZttSjFq2v0re417C1+GS80B6IwNe60ehPXxCW7tFats0Psz2jXAlJ69L8upN26xUpUo0qU/bqPZfRtq78uSAkzz5RqVNuFCPeNaX5X6LqarPGZjial1TkrtO1rRSeyVyvgezOLw9RTjRjUdtJN/Nb52NhwuWZhNNudNvxbdvhoBlcDTxlGk3Ug5zbXBGy9l+7WxQq1M1jJt0/Zeqsr7q9tH4czLwyPEKKSzCor2uu7dl8SjmGT42LXc1+90vJyi4NNeN2BNl/ygypxccRh3GcN0k1xLqr+82rJu0NHGQ46MtV86L+dHzRz7uMc06VWhTqxfOU17Pvav7h+U9nZYbEU5RnKLbd+H5uutvIDouIqaO7NI7WZ2lFxi9dvgzM9psx7qm3fW2hyHO80dSbbf8Af96AbB8nCVTMXJy+bTqO76aehD8qfahYiqsPRmnSp/OknpUqfal9fkaRKrJXtJq+js2rp8n1RAAAAAAAAAAAB2jjYhV71dQA5EAMAAAAAAAAAAAAfFjBUBk6GNcUrPw0N/yfOKUo0+KS4lZSbfwvvY5fxFqhiGreAHorCyhOCWm2jRhc8xdTCLvIxUo362Zo3ZbtU4WjNu3RJJcvU6Vh8VQrRXFZ3tZOzsBqC+UxbSwtS/g07/UZnLc+rYzanKEOV7K/nYyk8loOal7LT0ei2MjSVGmrLS3u08AEwWDhBXlq7c+RQxuKpKdk1fn4GF7U9qo04tU5K/K+z3urrnoctxmdVJycuOV7WTvrZgbF8oeb3qKMZbfOszRatS47HYmU3eW5WbAJMaAAAAAAAAAAAAdF/D19F+oGu/hk+q9EKBrjEFkIAAAAAAAAAAADqauxpJRARwdr20va/iPpvx0drmS7Pzj3kqc1eM1ZryLOfZD3FpwblDfrYDFKdno/6mawHaGpT2k9LJrfRX+y5rsnqPpVLO6A3nEdvZ8KjGNrNJvw5pFPHdsKsk433SXP0NRT5jlK+4FrFY2VRq7Kkp8hL8/QsZZl868+GC1tdvoBDhcLOrJRhFt+HLq30RDONjpWYZdTwOCqOKtNw4OLnJz01fvXoc7lG8fcgK4AAAAAAAAAAAAF3j8QK3eeAANqLV+bGkmIXty/af1kYAAAAAAAACpXJJQt5gRE9KARh1Hx3AbTqcFRS6O5vkJRqUtdbrRePI0LEQ2ZsHZjHfmN+QGHx2BlCUlbRfaUjpdehGa1SvazdjVc1yZ3ulbbVbf0A14dct/i6V7GayfJFfimvduBisryWrXdoxsvpPb3dTqPZ7IKeGppLWT+dK2sn/aEyrCrkuGPJWt8DK42vGlBybWiYGhfKXmF+CiuvE/crI01be4sZxjHXrym9r/ArtgVQLmIgt7FZwAYArQgAAAAAAAAAAE2NX5Sf7cv4mQlnMl+Wqf6k/4mVgACSnRlLZFyjhEt9WBShSb2RL+D23ZcqTtsVpXYDIRvtsE17RYgrEFTe4Ct6iQEUhQJ6kLprrqiLL6rhNPxG989mOtd3XvA6PlbVSCaDEYaUX9hjOyuLt7LNsetgMXRwdOWrgvT+hepUox+bBL3FyEIpCRs3sBPhIWVzS+3+dad1F7/ADjZs5zJUabd7aHJswxLqTc5O93p4gVo6LzFUrjFq9SRICWS09xBwXXiiao9wpR0ArRlyYsqL3Wq+JNXpEVKTWwEIGRjCM91Z9SOpgHyfuf3gUgHVKbjurDQAAADJZhhXKvV5Lvan8bFp4aK5XL+bySr1v8AWq/zJFLib30Ac5pDKlXohHALAQNj4+QlWNhYMB6IKpYsR1IXAgkgYshEAtWN1chjJosQfoMq07AW8vzaVJ3Xx2NswXbmCVp0b+Mam/ndaGicI1xA6b/+xw0l7KnfmrR9FrqYTMu2U3eFNRpr6afHKzXJ2ST9TWcNhp8N0mpXXC3ZJrXi380Q4uK45W2voBar5lOStKpKet9ZNr4lKTvuJGJJwW3ARIkgNSJIIBEtySktBVGxJwgRzjoVndF+KK9eADqLuT8VilhpWdi9wgOjNS0foyrisv5x9PuLCiSqdtOX1AYXuJdAM1ZAA7OF/wARX/1638yRSuXc5/xWIX/XrfzZFGS1AdcENFuATVyKBNcie4EsQYRBgMlG5XcbFwgnG4EV7D4SvoIoiRjbYB/CR1USxYysgNlw1DvnG04xapxbc5v6MUtW29OjenRGvY2nwzmtNJSV1qnZ7rwLeKoONKm2rXs1ybTWjtvbx2KEwDisiLiuw3/oT0aXX0AWFPmPpLUkbG0AH1UHJBUEjsA5ENRakw1oCnUVmZGlqrlGsrsu4WStoBIhGDZDUkBJxAQ96wAt9oP8TiOqxFf+bIpVNUmX+0kOHGYno8RX/myMcugDgGJjosBzG1OTFYkQH0wkhsGPYDWCiKgAgejJKqvrb0G1kLQlyYDFT8WLZ9bkzjqO4QMnmFG+EpSXVJ+fDLXdfR6P9rkYPuPNmcUnLC21spddFbb4SfP3GNiBFGnp9iHqPP8AtEg2rLQCNbMdQ2G1HoPpPQAmJTCU1bdEdKqr7r1AmS0EkJ3keq9Rsqi+kvVAV4q7ZLhJbkVOavLVeoYeolzQF5kEtrhKtF6cS9SGrWXUB/EBW4vH4gBn+1H+LxP/AHFf+bIxQAA1BAAAkEp7sAAdzHAACAwABsyGnuKAFsGAAWsF8x+/+EqQ5AAFigXIgAF6mZTDbAAGQol/DCgBkKRapiABZpcy1Q2AALtItUwACcAAD//Z"
              alt
            />
            <strong>BY: Striver</strong>
            <p>Best DSA Playlist</p>
          </div>

          <div>
            <a
              target="_blank"
              href="https://youtu.be/WQoB2z67hvY?si=UAmXQqjeR_vRLTvV"
            >
              <button
                style={{
                  margin: "5% 25%",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                Click here
              </button>
            </a>
          </div>
        </div>
        <div className="box-t">
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>NodeJs</h1>
            <img
              src="https://yt3.googleusercontent.com/H3djB_hVq1Ka1auGf5eCi-wUfwI-kctMW-skVqrXnJwAvqQxI8XSw_ErmyUMNEQmMIxcQgNhNGU=s176-c-k-c0x00ffffff-no-rj"
              alt
            />
            <strong>BY: Piyush Garg</strong>
            <p>Best Node js Playlist</p>
          </div>

          <a
            target="_blank"
            href="https://youtu.be/ohIAiuHMKMI?si=gsOifW2rgqfp5vKX"
          >
            <button
              style={{
                margin: "5% 25%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Click here
            </button>
          </a>
        </div>
        <div className="box-t">
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>HTML</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeCf8bSs7adkDzvKYBKULtTf4B5Jlp4mPsANBPXOdUZQ&s"
              alt
            />
            <strong>BY: Love Babbar</strong>
            <p>Best Html Video</p>
          </div>

          <a
            target="_blank"
            href="https://youtu.be/k7ELO356Npo?si=eqAQu3mREb00TVpb"
          >
            <button
              style={{
                margin: "5% 25%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Click here
            </button>
          </a>
        </div>
        <div className="box-t">
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>CSS</h1>
            <img
              src="data:image/jpeg;base64,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"
              alt
            />
            <strong>BY: Shradha Didi</strong>
            <p>Best CSS Video</p>
          </div>

          <a
            target="_blank"
            href="https://youtu.be/ESnrn1kAD4E?si=tAEoln4oBlciDwEd"
          >
            <button
              style={{
                margin: "5% 25%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Click here
            </button>
          </a>
        </div>
        <div className="box-t">
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>DSA</h1>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt
            />
            <strong>BY: Striver</strong>
            <p>Best DSA Playlist</p>
          </div>

          <a
            target="_blank"
            href="https://youtu.be/WQoB2z67hvY?si=UAmXQqjeR_vRLTvV"
          >
            <button
              style={{
                margin: "5% 25%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Click here
            </button>
          </a>
        </div>
        <div className="box-t">
          <div className="top-bar-t" />
          <div className="nav-t">
            <h6>
              <IoIosCheckmarkCircle />
            </h6>
            <input type="checkbox" className="heart-btn" id="heart-btn" />
            <CiHeart />
          </div>
          <div className="details">
            <h1>JavaScript</h1>
            <img
              src="https://yt3.googleusercontent.com/H3djB_hVq1Ka1auGf5eCi-wUfwI-kctMW-skVqrXnJwAvqQxI8XSw_ErmyUMNEQmMIxcQgNhNGU=s176-c-k-c0x00ffffff-no-rj"
              alt
            />
            <strong>BY: Piyush Garg</strong>
            <p>Best JavaScript Playlist</p>
          </div>

          <a
            target="_blank"
            href="https://youtu.be/5hqLNHCq_l8?si=Egf9-gtD7vJsFPjh"
          >
            <button
              style={{
                margin: "5% 25%",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Click here
            </button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
