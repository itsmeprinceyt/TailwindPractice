import Image from "next/image";

export default function ContainerColumn() {
    const IMAGE = "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1723215600&semt=ais_hybrid";

    return (
        <div className="bg-slate-300 min-h-screen flex justify-center items-center">
            <div className="bg-white h-[300px] w-[500px] rounded-xl p-2 container columns-1">
                <Image
                    className="bg-red-600 w-32 h-32 object-cover rounded-3xl float-left m-2"
                    src={IMAGE}
                    width={1280}
                    height={720}
                    alt="Leaf" />
                <p className="text-5xl">Title</p>
                <p>This is a dummy description data based on the data fetched from the mongoDB database. This is a dummy description data based on the data fetched from the mongoDB database. This is a dummy description data based on the data fetched from the mongoDB database. This is a dummy description data based on the data fetched from the mongoDB database. </p>
            </div>
        </div>
    );
}
