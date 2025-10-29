"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type Role = {
  name: string;
  date: string;
  signature: string;
};

type Company = {
  ceo: Role;
  coFounder: Role;
};

type AgreementData = {
  rdGroup: Company;
  colortouch: Company;
};

const initialData: AgreementData = {
  rdGroup: {
    ceo: { name: "", date: "", signature: "" },
    coFounder: { name: "", date: "", signature: "" },
  },
  colortouch: {
    ceo: { name: "", date: "", signature: "" },
    coFounder: { name: "", date: "", signature: "" },
  },
};

const AgreementSignatures: React.FC = () => {
  const [data, setData] = useState<AgreementData>(initialData);

  // Load stored data (signatures + names + dates)
  useEffect(() => {
    const fetchSignatures = async () => {
      try {
        const res = await fetch("/api/upload");
        const result = await res.json();
        if (result.signatures) {
          setData((prev) => ({
            ...prev,
            ...result.signatures,
          }));
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSignatures();
  }, []);

  // Handle name/date change + persist to backend
  const handleChange = (
    company: keyof AgreementData,
    role: keyof Company,
    field: keyof Role,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      [company]: {
        ...prev[company],
        [role]: {
          ...prev[company][role],
          [field]: value,
        },
      },
    }));

    // Save to backend (PUT)
    fetch("/api/upload", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyKey: company, roleKey: role, [field]: value }),
    }).catch((err) => console.error("Failed to save", err));
  };

  // Handle file uploads (signature)
  const handleFileChange = async (
    company: keyof AgreementData,
    role: keyof Company,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("companyKey", company);
    formData.append("roleKey", role);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const result = await res.json();
      if (result.url) {
        handleChange(company, role, "signature", result.url);
      }
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  // Remove signature
  // const handleRemoveSignature = async (company: keyof AgreementData, role: keyof Company) => {
  //   try {
  //     await fetch("/api/upload", {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ companyKey: company, roleKey: role }),
  //     });
  //     handleChange(company, role, "signature", "");
  //   } catch (err) {
  //     console.error("Failed to remove signature", err);
  //   }
  // };

const handleRemoveSignature = async (company: keyof AgreementData, role: keyof Company) => {
  try {
    await fetch("/api/upload", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ companyKey: company, roleKey: role }),
    });

    // Reset all fields (name, date, signature)
    setData((prev) => ({
      ...prev,
      [company]: {
        ...prev[company],
        [role]: { name: "", date: "", signature: "" },
      },
    }));

    // Persist cleared data to backend
    await fetch("/api/upload", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        companyKey: company,
        roleKey: role,
        name: "",
        date: "",
        signature: "",
      }),
    });
  } catch (err) {
    console.error("Failed to remove signature and clear data", err);
  }
};

  // Render role input fields
  const renderRole = (companyKey: keyof AgreementData, roleKey: keyof Company, roleLabel: string) => {
    const role = data[companyKey][roleKey];

    return (
      <div className="text-left">
        <p className="text-sm font-medium text-white mb-1">{roleLabel}</p>

        <p className="text-sm text-gray-400 mb-1">
          Name:{" "}
          <input
            type="text"
            value={role.name}
            onChange={(e) => handleChange(companyKey, roleKey, "name", e.target.value)}
            className="text-white p-1 rounded w-full bg-[#29323E] border border-gray-600 shadow-[0_0_6px_rgba(255,255,255,0.15)] focus:shadow-[0_0_8px_rgba(255,255,255,0.25)] focus:outline-none transition-shadow"
          />
        </p>

        <p className="text-xs text-gray-400 mb-1">
          Date:{" "}
          <input
            type="date"
            value={role.date}
            onChange={(e) => handleChange(companyKey, roleKey, "date", e.target.value)}
            className="text-white p-1 rounded w-full"
          />
        </p>

        <div className="border-b-2 border-gray-600 mb-2 pb-2 flex justify-center items-center h-24">
          {role.signature ? (
            <Image
              width={200}
              height={100}
              src={role.signature}
              alt={`${roleLabel} signature`}
              className="max-h-full object-contain"
            />
          ) : (
            <span className="text-gray-500">Signature Preview</span>
          )}
        </div>

        {!role.signature && (
          <p className="text-sm text-gray-400">
            Signature:{" "}
            <input type="file" accept="image/*" onChange={(e) => handleFileChange(companyKey, roleKey, e)} />
          </p>
        )}

        {role.signature && (
          <p className="text-sm mt-2">
            <button
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              onClick={() => handleRemoveSignature(companyKey, roleKey)}
            >
              Remove Signature
            </button>
          </p>
        )}
      </div>
    );
  };

  return (
    <div>
      <section className="bg-gray-900 rounded-xl shadow-lg border border-gray-700 p-8 mt-12">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Agreement Signatures</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-white mb-6">For The RD Group of Industries</h3>
              <div className="space-y-6">
                {renderRole("rdGroup", "ceo", "Founder & CEO")}
                {renderRole("rdGroup", "coFounder", "Co-Founder & MD")}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gray-800 rounded-lg p-6 mb-4">
              <h3 className="font-semibold text-white mb-6">For Colortouch India</h3>
              <div className="space-y-6">
                {renderRole("colortouch", "ceo", "Founder & CEO")}
                {renderRole("colortouch", "coFounder", "Co-Founder & MD")}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgreementSignatures;
