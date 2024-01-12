from flask import Flask, request, jsonify
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np

app = Flask(__name__)

model = tf.keras.models.load_model("mnist_model.h5")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        img_test_real = request.files["file"]
        img_test_real.save("img_test_real.png")
        img_test_real = image.load_img(
            "img_test_real.png", color_mode="grayscale", target_size=(28, 28)
        )
        img_test_real = image.img_to_array(img_test_real)
        img_test_real.shape
        img_test_real = img_test_real.reshape(1, 784)
        img_test_real.shape
        img_test_real = img_test_real / 255
        y_pred = model.predict(img_test_real)
        y_pred = np.argmax(y_pred)
        return jsonify({"result": str(y_pred)})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
