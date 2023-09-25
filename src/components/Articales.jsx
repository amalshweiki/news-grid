import React from "react";
import ent1 from "../image_resources/articles/ent1.jpg";
import ent2 from "../image_resources/articles/ent2.jpg";
import sports1 from "../image_resources/articles/sports1.jpg";
import tech1 from "../image_resources/articles/tech1.jpg";
import tech2 from "../image_resources/articles/tech2.jpg";
export const Articales = () => {
  return (
    <>
      <section id="home-articles" class="py-2">
        <div class="container">
          <h2>Editor Picks</h2>
          <div class="articles-container">
            <article class="card">
              <img src={ent1} alt="" />
              <div>
                <div class="category category-ent">Entertainment</div>
                <h3>
                  <a href="article.html">Lorem ipsum dolor sit amet</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quam eius ducimus optio veniam sit nihil beatae ea autem.
                  Doloribus.
                </p>
              </div>
            </article>
            <article class="card bg-dark">
              <div class="category category-sports">Sports</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam eius ducimus optio veniam sit nihil beatae ea autem.
                Doloribus.
              </p>
            </article>
            <article class="card">
              <img src={tech1} alt="" />
              <div class="category category-tech">Technology</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam eius ducimus optio veniam sit nihil beatae ea autem.
                Doloribus.
              </p>
            </article>
            <article class="card">
              <div class="category category-sports">Sports</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam eius ducimus optio veniam sit nihil beatae ea autem.
                Doloribus.
              </p>
              <img src={sports1} alt="" />
            </article>
            <article class="card">
              <img src={tech2} alt="" />
              <div class="category category-tech">Technology</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam eius ducimus optio veniam sit nihil beatae ea autem.
                Doloribus.
              </p>
            </article>
            <article class="card bg-primary">
              <div class="category category-sports">Sports</div>
              <h3>
                <a href="article.html">Lorem ipsum dolor sit amet</a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                quam eius ducimus optio veniam sit nihil beatae ea autem.
                Doloribus.
              </p>
            </article>
            <article class="card">
              <div>
                <div class="category category-ent">Entertainment</div>
                <h3>
                  <a href="article.html">Lorem ipsum dolor sit amet</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                  quam eius ducimus optio veniam sit nihil beatae ea autem.
                  Doloribus.
                </p>
              </div>
              <img src={ent2} alt="" />
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
