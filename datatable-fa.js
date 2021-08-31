$("#datatable").DataTable({
                                stateSave: true,
                                "paging": true,
                                "ordering": true,
                                "info": true,
                                "pagingType": "full_numbers",
                                rowReorder: true,
                                "language": {
                                    "decimal": "",
                                    "thousands": ",",
                                    "emptyTable": "رکوردی برای نمایش وجود ندارد",
                                    "info": "نمایش _START_ تا _END_ از _TOTAL_ رکورد",
                                    "infoEmpty": "نمایش 0 تا 0 از 0 رکورد",
                                    "infoFiltered": "(جستجو در بین _MAX_ رکورد)",
                                    "infoPostFix": "",
                                    "lengthMenu": 'نمایش <select class="browser-default custom-select">' +
                                        '<option value="10">10</option>' +
                                        '<option value="20">20</option>' +
                                        '<option value="30">30</option>' +
                                        '<option value="40">40</option>' +
                                        '<option value="50">50</option>' +
                                        '<option value="-1">همه</option>' +
                                        '</select> رکورد',
                                    "loadingRecords": "Loading...",
                                    "processing": "Processing...",
                                    "search": "",
                                    "searchPlaceholder": "جستجو",
                                    "zeroRecords": "رکورد مرتبطی پیدا نشد",
                                    "paginate": {
                                        "first": "اول",
                                        "last": "آخر",
                                        "next": "بعدی",
                                        "previous": "قبلی"
                                    },
                                    "aria": {
                                        "sortAscending": ": activate to sort column ascending",
                                        "sortDescending": ": activate to sort column descending"
                                    }
                                },
                                //"initComplete": function(settings, json) {
                                //    autoCompeleteState();
                                //}
                            });