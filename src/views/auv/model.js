import React from "react";

// core components
import { GLTFModel } from "react-3d-viewer";

export default function Model() {
  return (
    <div>
      <GLTFModel
        width={300}
        height={300}
        src={require("assets/decimatedauv.gltf")}
        style={{ borderRadius: "10px" }}
      ></GLTFModel>
    </div>
  );
}
