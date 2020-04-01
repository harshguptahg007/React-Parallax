import React from 'react';
import './App.css';
import CompleteSection from "./components/Complete-Section/Complete-Section";
import TextSection from "./components/Text-Section/Text-Section";
import MiniSection from "./components/Mini-Section/Mini-Section";
import Image1 from './assets/image1.jpg';
import Image2 from './assets/image2.jpg';
import Image3 from './assets/image3.jpg';

function App() {
    return (
        <div className="App">
            <CompleteSection buttonText={"Parallax Website"} image={Image1}/>
            <TextSection
                title="Section One"
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!"}
                backgroundColor={"#F4F4F4"}
                textColor={"#666666"}
            />
            <MiniSection text="Image Two Text" image={Image2}/>
            <TextSection
                title="Section Two"
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!"}
                backgroundColor={"#292D35"}
                textColor={"#ffffff"}
            />
            <MiniSection text="Image Three Text" image={Image3}/>
            <TextSection
                title="Section Three"
                paragraph={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!"}
                backgroundColor={"#292D35"}
                textColor={"#ffffff"}
            />
            <CompleteSection buttonText={"Traversy Media"} image={Image1}/>
        </div>
    );
}

export default App;
