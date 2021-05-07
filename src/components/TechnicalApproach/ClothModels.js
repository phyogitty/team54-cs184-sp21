import React from "react";

const ClothModels = () => {
  return (
    <div id="cloth-models">
      <div className="title-font">Simulating Various Cloth Types</div>
      <div className="py-1"></div>
      <div>
        In all three types of clothing, we increased the weight of each item 10
        times to make the weight of the clothing heavier so that its behavior is
        closer to the real fabric.In the first type of cloth, we change to half
        the maximum length of the bending spring for every 6-point mass in
        height and width directions. In contrast, we double this parameter for
        one spring between each pair of them because the cloth will not be tight
        a lot. Also, for these longer bending springs, we decrease the spring
        coefficient more than usual because we need them to be looser in the
        cloth. As a result, the cloth will be bumpy in some small square areas,
        and it always keeps its form in different conditions.
      </div>
      <div className="py-2"></div>
      <div>
        In the second type of cloth, we change to 0.7 the maximum length of the
        bending spring for every 6-point mass in horizontal directions. It
        causes the cloth to have some wrinkles in the vertical direction. It is
        like a cloth that we have folded and ironed. To prevent the fabric from
        shrinking too much, we tripled the maximum length of the structural-type
        spring in some places horizontally and made the spring coefficient 10
        times weaker. In this type, we manipulate both structural and bending
        spring types.
      </div>{" "}
      <div className="py-2"></div>
      <div>
        The third type of cloth is fancier. It is wavy in horizontal, but it is
        straight or changes the wave direction when more mass falls on it. We
        reach this type with a trick. First, we find each bending spring that
        has a sixth position in vertical and horizontal. Then, if it is a
        vertical spring, we decrease its max length to 0.8 of the default. ​It
        causes the cloth to be wavy but not forced in all places.
      </div>{" "}
      <div className="py-2"></div>
      <div>
        Synthetic leather and jean have more mass and thickness, and they do not
        have much traction. For these clothes types, we adjust the parameters
        the same as previous types that jean and synthetic leather behaviors are
        more similar to the real ones. We did the research for their designs and
        colors to reach a normal result. Their appearance also depends on the
        amount of radiance and reflection of the light. As a result, we found
        the desired amount for synthetic leather, which has a polish, and denim,
        which has a very rough surface. Also, their reflection affected the
        brightness and color of the fabric, so we could not choose any amount
        and it needed more accuracy. We could not select any image for their
        textures because we needed the image with the highest frequency in their
        edges and lines. Especially denim fabric that has large threads and they
        should be seen in the last result.
      </div>{" "}
      <div className="py-2"></div>
      <div>
        We used the same techniques for designing a silk cloth. We must show
        that it is thin, light, and sleazy. The mesh (point masses) of our
        fabric was large (large distance between them) and it was difficult to
        put these specifications into it. We increased the mesh, but it had an
        adverse effect on processing speed. The movements of the fabric had
        slowed down and made the silk fabric look unreal. As a result, we tried
        to achieve a real fabric with the original mesh.
      </div>
      <div className="py-2"></div>
      <div>
        <a href="cloth-visual">Results for Various Cloth Types</a>
      </div>
    </div>
  );
};

export default ClothModels;
