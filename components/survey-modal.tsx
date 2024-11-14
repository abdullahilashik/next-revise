"use client";

import React from 'react'
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from './ui/dialog';
import { useRouter } from 'next/navigation';

const SurveyModal = () => {
    const router = useRouter();
    const handleOpenChange = () => {
        router.back();
    }
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
        <DialogOverlay>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <h1>Survey</h1>
            </DialogContent>
        </DialogOverlay>
    </Dialog>
  )
}

export default SurveyModal