﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace EventPlannerSampleTest.Models
{
    public partial class Events
    {
        public Events()
        {
            bookings = new HashSet<bookings>();
        }

        [Key]
        public int event_id { get; set; }
        [Required]
        [StringLength(50)]
        public string event_name { get; set; }

        [InverseProperty("_event")]
        public virtual ICollection<bookings> bookings { get; set; }
    }
}