'use client';

import { Section } from '@/components/Section';
import { useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <div className="bg-primary-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-primary-100 mt-2">Manage your healthcare platform</p>
        </div>
      </div>

      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'doctors', label: 'Doctors' },
              { id: 'appointments', label: 'Appointments' },
              { id: 'content', label: 'Content' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 rounded-lg font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 border border-neutral-200">
                  <p className="text-neutral-600 text-sm">Total Doctors</p>
                  <p className="text-3xl font-bold text-neutral-900 mt-2">24</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-neutral-200">
                  <p className="text-neutral-600 text-sm">Pending Appointments</p>
                  <p className="text-3xl font-bold text-primary-600 mt-2">12</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-neutral-200">
                  <p className="text-neutral-600 text-sm">Unread Messages</p>
                  <p className="text-3xl font-bold text-secondary-600 mt-2">7</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-neutral-200">
                  <p className="text-neutral-600 text-sm">Active Users</p>
                  <p className="text-3xl font-bold text-neutral-900 mt-2">156</p>
                </div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    href="/admin/doctors"
                    className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
                  >
                    <p className="font-semibold text-neutral-900">Manage Doctors</p>
                    <p className="text-sm text-neutral-600">Add, edit, or remove doctors</p>
                  </Link>
                  <Link
                    href="/admin/appointments"
                    className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
                  >
                    <p className="font-semibold text-neutral-900">View Appointments</p>
                    <p className="text-sm text-neutral-600">Confirm and manage bookings</p>
                  </Link>
                  <Link
                    href="/admin/blog"
                    className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
                  >
                    <p className="font-semibold text-neutral-900">Manage Blog</p>
                    <p className="text-sm text-neutral-600">Create and publish articles</p>
                  </Link>
                  <Link
                    href="/admin/messages"
                    className="p-4 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors"
                  >
                    <p className="font-semibold text-neutral-900">View Messages</p>
                    <p className="text-sm text-neutral-600">Read contact form submissions</p>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Doctors Tab */}
          {activeTab === 'doctors' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral-900">Manage Doctors</h2>
                <Link
                  href="/admin/doctors/new"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Add Doctor
                </Link>
              </div>
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Name</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Specialty</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                      <td className="px-6 py-3 text-neutral-900">Dr. Ahmed Hassan</td>
                      <td className="px-6 py-3 text-neutral-600">Cardiology</td>
                      <td className="px-6 py-3">
                        <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-900">Manage Appointments</h2>
              <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-neutral-50 border-b border-neutral-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Patient</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Doctor</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Date</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Status</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-neutral-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                      <td className="px-6 py-3 text-neutral-900">John Doe</td>
                      <td className="px-6 py-3 text-neutral-600">Dr. Ahmed Hassan</td>
                      <td className="px-6 py-3 text-neutral-600">Mar 25, 2024</td>
                      <td className="px-6 py-3">
                        <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                          Pending
                        </span>
                      </td>
                      <td className="px-6 py-3">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-semibold">Confirm</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral-900">Manage Content</h2>
                <Link
                  href="/admin/blog/new"
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  New Article
                </Link>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors">
                  <h3 className="font-semibold text-neutral-900">Understanding Hypertension</h3>
                  <p className="text-sm text-neutral-600 mt-1">Published on Mar 15, 2024</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
