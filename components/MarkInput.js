import { useContext } from 'react';
import MarkContext from '@/context/MarkContext';

export default function MarkInput() {
  const { SetMarkOutput } = useContext(MarkContext);

  const ChangeHandler = (e) => {
    SetMarkOutput(e.target.value);
  };

  return (
    <div className="w-1/2 h-full mx-4 my-4 ">
      <textarea
        type="text"
        placeholder="Write here..."
        className=" w-full h-[95%] bg-slate-700 text-start text-lg"
        onChange={ChangeHandler}
      />
    </div>
  );
}
