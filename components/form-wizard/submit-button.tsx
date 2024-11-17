import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { previousActiveTab, selectActiveTab, updateSelectedTab } from "@/lib/features/mutlipage/multiPageSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SubmitButton = ({ hasPrevious }: { hasPrevious: boolean }) => {
  const dispatch = useDispatch();
  const selectedTab = useSelector(selectActiveTab);
  const handlePreviousStep = () => {    
    dispatch(previousActiveTab());
  };

  return (
    <>
      <div className="flex items-center justify-between">
        {hasPrevious && (
          <Button
            onClick={handlePreviousStep}
            type="button"
            className="inline-flex gap-1 items-center"
          >
            <ArrowLeft />
            <span>Previous Page</span>
          </Button>
        )}
        <Button type="submit" className="inline-flex gap-1 items-center">
          <span> {selectedTab == 5 ? 'Finish' : 'Next Page'} </span>
          <ArrowRight />
        </Button>
      </div>
    </>
  );
};

export default SubmitButton;
