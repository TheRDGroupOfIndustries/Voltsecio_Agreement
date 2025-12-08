"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { toast, Toaster } from "react-hot-toast";

const AgreementSignatures = () => {
  const [voltSec, setVoltSec] = useState({
    name: "",
    designation: "",
    date: "",
    signature: "",
  });

  const [developer, setDeveloper] = useState({
    developerName: "",
    date: "",
    signature: "",
  });

  const [loadingVoltSec, setLoadingVoltSec] = useState(false);
  const [loadingDeveloper, setLoadingDeveloper] = useState(false);

  const [hasSavedVoltSec, setHasSavedVoltSec] = useState(false);
  const [hasSavedDeveloper, setHasSavedDeveloper] = useState(false);

  // ---------------- FETCH EXISTING VOLTSEC ON LOAD -------------------
  useEffect(() => {
    const fetchVoltSec = async () => {
      try {
        const res = await fetch("/api/voltsec");

        if (res.status === 200) {
          const data = await res.json();

          setVoltSec({
            name: data.data.name,
            designation: data.data.designation,
            date: data.data.date,
            signature: data.data.signature,
          });

          setHasSavedVoltSec(true);
        }
      } catch (err) {
        console.log("No VoltSec record found.");
      }
    };

    fetchVoltSec();
  }, []);

  // ---------------- UPLOAD SIGNATURE -------------------
  const uploadSignature = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      return data.url;
    } catch {
      toast.error("Upload failed!");
      return null;
    }
  };

  // ---------------- SAVE VOLTSEC -------------------
  const saveVoltSec = async () => {
    if (loadingVoltSec || hasSavedVoltSec) return;

    setLoadingVoltSec(true);

    await fetch("/api/voltsec", {
      method: "POST",
      body: JSON.stringify(voltSec),
      headers: { "Content-Type": "application/json" },
    });

    toast.success("VoltSec saved!");
    setLoadingVoltSec(false);
    setHasSavedVoltSec(true);
  };

  // ---------------- SAVE DEVELOPER -------------------
  const saveDeveloper = async () => {
    if (loadingDeveloper || hasSavedDeveloper) return;

    setLoadingDeveloper(true);

    const data=await fetch("/api/developer", {
      method: "POST",
      body: JSON.stringify(developer),
      headers: { "Content-Type": "application/json" },
    });
    console.log("daa; ",data);
    

    toast.success("Developer saved!");
    setLoadingDeveloper(false);
    setHasSavedDeveloper(true);
  };

  // ---------------- AUTO SAVE VOLTSEC -------------------
  useEffect(() => {
    if (!voltSec.name || !voltSec.designation || !voltSec.date || !voltSec.signature) return;
    if (hasSavedVoltSec) return;

    const timer = setTimeout(() => saveVoltSec(), 300);
    return () => clearTimeout(timer);
  }, [voltSec, hasSavedVoltSec]);

  // ---------------- AUTO SAVE DEVELOPER -------------------
  useEffect(() => {
    if (!developer.developerName || !developer.date || !developer.signature) return;
    if (hasSavedDeveloper) return;

    const timer = setTimeout(() => saveDeveloper(), 300);
    return () => clearTimeout(timer);
  }, [developer, hasSavedDeveloper]);

  // ---------------- SIGNATURE BLOCK -------------------
  const SignatureBlock = (label: string, url: string, onUpload: any, disabled: boolean) => (
    <div className="mb-4">
      <p className="text-gray-300 mb-1 text-sm">{label}</p>

      <div className="border border-gray-700 bg-gray-800 rounded-2xl p-3 h-28 flex justify-center items-center shadow-inner mb-3">
        {url ? (
          <Image src={url} width={200} height={80} alt="Signature" />
        ) : (
          <span className="text-gray-500">Signature Preview</span>
        )}
      </div>

      {!disabled && !url && (
        <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-xl inline-block transition">
          Upload Signature
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) return;

              toast.loading("Uploading...", { id: "upload" });

              const uploadedURL = await uploadSignature(file);

              if (!uploadedURL) {
                toast.error("Upload failed!", { id: "upload" });
                return;
              }

              onUpload(uploadedURL);

              toast.success("Signature Uploaded!", { id: "upload" });
            }}
          />
        </label>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 drop-shadow-lg">
        Agreement Signatures
      </h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-5xl">

        {/* ---------------- VOLTSEC SECTION ---------------- */}
        <div className="bg-[#00A9FF0A] rounded-3xl p-8 shadow-2xl gradient-border">
          <h3 className="text-white text-xl mb-6 text-center font-semibold">VoltSec.io</h3>

          <input
            type="text"
            placeholder="Name"
            value={voltSec.name}
            disabled={hasSavedVoltSec}
            onChange={(e) => setVoltSec({ ...voltSec, name: e.target.value })}
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-2xl text-gray-300 mb-4 ${
              hasSavedVoltSec ? "cursor-not-allowed" : ""
            }`}
          />

          <input
            type="text"
            placeholder="Designation"
            value={voltSec.designation}
            disabled={hasSavedVoltSec}
            onChange={(e) => setVoltSec({ ...voltSec, designation: e.target.value })}
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-2xl text-gray-300 mb-4 ${
              hasSavedVoltSec ? "cursor-not-allowed" : ""
            }`}
          />

          <input
            type="date"
            value={voltSec.date}
            disabled={hasSavedVoltSec}
            onChange={(e) => setVoltSec({ ...voltSec, date: e.target.value })}
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-2xl text-gray-300 mb-4 ${
              hasSavedVoltSec ? "cursor-not-allowed" : ""
            }`}
          />

          {SignatureBlock("Signature", voltSec.signature, (url: string) => {
            setVoltSec({ ...voltSec, signature: url });
          }, hasSavedVoltSec)}
        </div>

        {/* ---------------- DEVELOPER SECTION ---------------- */}
        <div className="bg-[#00A9FF1A] rounded-3xl p-8 shadow-2xl gradient-border">
          <h3 className="text-white text-xl mb-6 text-center font-semibold">Developer</h3>

          <input
            type="text"
            placeholder="Developer Name"
            value={developer.developerName}
            disabled={hasSavedDeveloper}
            onChange={(e) =>
              setDeveloper({ ...developer, developerName: e.target.value })
            }
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-2xl text-gray-300 mb-4 ${
              hasSavedDeveloper ? "cursor-not-allowed" : ""
            }`}
          />

          <input
            type="date"
            value={developer.date}
            disabled={hasSavedDeveloper}
            onChange={(e) => setDeveloper({ ...developer, date: e.target.value })}
            className={`w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-2xl text-gray-300 mb-4 ${
              hasSavedDeveloper ? "cursor-not-allowed" : ""
            }`}
          />

          {SignatureBlock(
            "Signature",
            developer.signature,
            (url: string) => setDeveloper({ ...developer, signature: url }),
            hasSavedDeveloper
          )}
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default AgreementSignatures;
