export default function MarkInput() {
  return (
    <div className="w-1/2 h-full mx-4 my-4 ">
      <textarea
        type="text"
        placeholder="Write here..."
        className=" w-full h-[95%] bg-slate-700 text-start overflow-y-scroll text-lg"
      />
    </div>
  );
}
