import React from "react";

const Optimizations = () => {
  return (
    <div id="optimizations">
      <div className="py-1"></div>
      <div className="title-font">Optimizing Simulation Speed</div>
      <div>
        We also optimized the program by utilizing multithreading. We used the
        OpenMP API to implement multithreading. OpenMP can be easily enabled by
        compiling with the correct flag (-fopenmp for GCC, /openmp for MVSC). We
        used performance profiling tools to look at where the bulk CPU resources
        were being spent, and found that the majority of resources were being
        used in the{" "}
        <span className="code-font">Cloth::build_spatial_map()</span>,{" "}
        <span className="code-font">Cloth::self_collide()</span>, and{" "}
        <span className="code-font">Cloth::hash_position</span>(Vector3D pos)
        functions. Because the Microsoft C/C++ compiler (MVSC) only supports
        OpenMP 2.0, which doesn’t support parallelization of iterator based
        for-loops, we had to rewrite some loops to use indices. Also, we had to
        make some changes to avoid race conditions and false sharing. The
        majority of our improvements came from{" "}
        <span className="code-font">Cloth::build_spatial_map()</span> and{" "}
        <span className="code-font">Cloth::hash_position()</span>. In{" "}
        <span className="code-font">Cloth::build_spatial_map()</span>, we
        allocated an array on the heap so that we could compute the hashes in
        parallel and store them in the array. In{" "}
        <span className="code-font">Cloth::hash_position()</span>, we
        implemented a new, simpler hash function that  was based on small
        primes. We used this hash function because we know that our scenes
        consist of a fairly small number of points (less than 10000).
      </div>
      <div className="py-2"></div>
      <div>
        <a
          href="#optimization-visual"
          className="bg-blue2 see-result p-2 tc-blue4"
        >
          Demo for Optimization
        </a>
      </div>
      <div className="py-4"></div>
    </div>
  );
};
export default Optimizations;
