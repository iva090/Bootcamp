import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function AvatarUpload({ onFileSelect, error }) {
    const [preview, setPreview] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onFileSelect(file);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': [],
            'image/webp': []
        },
        multiple: false
    });

    return (
        <div className="w-full flex flex-col gap-2 text-left">
            <label className="text-sm font-semibold text-gray-700">Upload Avatar</label>

            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all min-h-[160px]
                    ${isDragActive ? 'border-[#5D51E8] bg-indigo-50' : 'border-gray-300 bg-white hover:border-gray-400'}
                    ${error ? 'border-red-500' : ''}`}
            >
                <input {...getInputProps()} />

                {preview ? (
                    <div className="relative group">
                        <img src={preview} alt="Preview" className="w-24 h-24 rounded-full object-cover border-2 border-[#5D51E8]" />
                        <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="text-white text-xs font-medium">Change</span>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-center">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.75 21.25V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V21.25" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24.0837 11.3333L17.0003 4.25L9.91699 11.3333" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17 4.25V21.25" stroke="#ADADAD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>


                        <p className="text-gray-600 text-sm">
                            Drag and drop or <span className="text-[#5D51E8] font-bold underline">Upload file</span>
                        </p>
                        <p className="text-gray-400 text-xs mt-1">JPG, PNG or WebP</p>
                    </div>
                )}
            </div>
            {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
}