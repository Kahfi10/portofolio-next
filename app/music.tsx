import React from 'react';
import AudioPlayer from '@/components/AudioPlayer';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import useSound from 'use-sound';
import { MORPHING_DIALOGS } from './data';
import { dialog } from 'motion/react-client';

export function MorphingDialogBasicTwo() {
  return (
    <>
      {MORPHING_DIALOGS.map((dialog) => (
        <MorphingDialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '4px',
        }}
        className='grid grid-cols-2 mb-2 gap-5 sm:grid-cols-2 border border-gray-200/60 bg-white'
      >
        <div className='flex items-center space-x-3 p-3'>
          <MorphingDialogImage
            src={dialog.image}
            alt={dialog.title}
            className='h-8 w-8 rounded-xl object-cover object-top'
            style={{
              borderRadius: '4px',
            }}
          />
          <div className='flex flex-col items-start justify-center space-y-0'>
            <MorphingDialogTitle className='text-[10px] font-medium text-black sm:text-xs'>
              {dialog.title}
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-[10px] text-gray-600 sm:text-xs'>
              {dialog.subtitle}
              <AudioPlayer/>
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '12px',
          }}
          className='relative h-auto w-[500px] border border-gray-100 bg-white'
        >
          <ScrollArea className='h-[90vh]' type='scroll'>
            <div className='relative p-6'>
              <div className='flex rounded-1xl justify-center py-10'>
                <MorphingDialogImage
                  src={dialog.image}
                  alt={dialog.title}
                  className='h-auto w-[200px]'
                  style={{
                    borderRadius: '10px',
                  }}
                />
              </div>
              <div className=''>
                <MorphingDialogTitle className='text-black'>
                  {dialog.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='font-light text-gray-400'>
                  {dialog.subtitle}
                  <AudioPlayer/>
                </MorphingDialogSubtitle>
                <div className='mt-4 text-sm text-gray-700'>
                  <p>
                    {dialog.content}
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <MorphingDialogClose className='text-zinc-500' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
      ))}
    </>
  );
}
