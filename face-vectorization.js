module.exports = function(RED) {
  function FaceVectorizationNode(config) {
      RED.nodes.createNode(this,config);
      var node = this;
      node.on('input', function(msg) {
          msg.payload = msg.payload.toLowerCase();
          node.send(msg);
      });
  }
  RED.nodes.registerType("face-vectorization",FaceVectorizationNode);
}